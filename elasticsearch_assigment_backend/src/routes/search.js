const express = require("express")
const router = express.Router()
const client = require("../elastic")

router.post("/search", async (req, res) => {
  const { query, category, author, page = 1, limit = 100 } = req.body
  const from = (page - 1) * limit

  try {
    let body = {}

    // if no filters or search terms → show all
    if (!query && !category && !author) {
      body = {
        query: { match_all: {} },
        from,
        size: limit
      }
    } else {
      body = {
        from,
        size: limit,
        query: {
          bool: {
            must: [
              {
                multi_match: {
                  query: query || "",
                  fields: ["title", "author"],
                  fuzziness: "AUTO"
                }
              }
            ],
            filter: [
              ...(category ? [{ term: { category } }] : []),
              ...(author ? [{ match: { author } }] : [])
            ]
          }
        }
      }
    }

    const result = await client.search({
      index: "books",
      body
    })

    const books = result.hits.hits.map(b => b._source)
    res.json({ books })
  } catch (err) {
    console.log("search error:", err)
    res.status(500).json({ error: "Search failed" })
  }
})

module.exports = router
