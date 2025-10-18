import React from "react"
import { Grid, Card, CardContent, Typography, Box } from "@mui/material"

const BookList = ({ results, searched }) => {
  if (searched && results.length === 0) {
    return (
      <Typography
        align="center"
        color="text.secondary"
        sx={{ mt: 4, fontSize: 18 }}
      >
        No results found.
      </Typography>
    )
  }

  return (
    <Box sx={{ mt: 3 }}>
      <Grid container spacing={3}>
        {results.map((b, i) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={i}>
            <Card
              sx={{
                borderRadius: 3,
                boxShadow: 3,
                height: "100%",
                transition: "transform 0.2s ease",
                "&:hover": { transform: "scale(1.03)" }
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ mb: 1 }}>
                  {b.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.primary", mb: 0.5 }}>
                  <strong>Author:</strong> {b.author}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  <strong>Category:</strong> {b.category}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", mt: 0.5 }}
                >
                  <strong>Published:</strong> {b.published_date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default BookList
