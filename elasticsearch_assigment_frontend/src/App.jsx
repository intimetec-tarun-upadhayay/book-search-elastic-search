import React, { useEffect, useState } from "react"
import { Container, Typography, Box } from "@mui/material"
import SearchBar from "./components/SearchBar"
import BookList from "./components/BookList"
import Loader from "./components/Loader"
import { searchBooks } from "./services/api"

function App() {
  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const fetchBooks = async (query = "", category = "", author = "") => {
    setLoading(true)
    try {
      const data = await searchBooks(query, category, author)
      setBooks(data.books || [])
      setSearched(!!query || !!category || !!author)
    } catch (err) {
      console.log("fetch failed:", err)
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchBooks()
  }, [])

  return (
    <Container maxWidth="lg" sx={{ mt: 6, mb: 6 }}>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 600, mb: 1 }}>
          📚 Book Explorer
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Find your favorite books by title, author, or category
        </Typography>
      </Box>
      <SearchBar onSearch={fetchBooks} />
      {loading ? <Loader /> : <BookList results={books} searched={searched} />}
    </Container>
  )
}

export default App
