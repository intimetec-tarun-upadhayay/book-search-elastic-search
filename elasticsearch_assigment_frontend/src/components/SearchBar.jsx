import React, { useState } from "react"
import { Box, TextField, MenuItem, Button, Paper } from "@mui/material"

const categories = [
  "Fiction", "Fantasy", "Classic", "Thriller", "Romance",
  "Adventure", "Science", "History", "Technology", "Mystery"
]

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    onSearch(query, category, author)
  }

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        mb: 4,
        borderRadius: 3,
        backgroundColor: "#fafafa"
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center"
        }}
      >
        <TextField
          label="Search books..."
          variant="outlined"
          value={query}
          onChange={e => setQuery(e.target.value)}
          sx={{ flex: 1, minWidth: 220 }}
        />
        <TextField
          select
          label="Category"
          value={category}
          onChange={e => setCategory(e.target.value)}
          sx={{ minWidth: 180 }}
        >
          <MenuItem value="">All</MenuItem>
          {categories.map(c => (
            <MenuItem key={c} value={c}>{c}</MenuItem>
          ))}
        </TextField>
        <TextField
          label="Author"
          variant="outlined"
          value={author}
          onChange={e => setAuthor(e.target.value)}
          sx={{ minWidth: 180 }}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ px: 4 }}
        >
          Search
        </Button>
      </Box>
    </Paper>
  )
}

export default SearchBar
