const client = require("./elastic")

const authors = [
  "J.K. Rowling", "George Orwell", "Harper Lee", "J.R.R. Tolkien",
  "Mark Twain", "Jane Austen", "Ernest Hemingway", "Agatha Christie",
  "Leo Tolstoy", "Charles Dickens", "F. Scott Fitzgerald", "Suzanne Collins",
  "Dan Brown", "Paulo Coelho", "Stephen King", "C.S. Lewis",
  "H.G. Wells", "Arthur Conan Doyle", "J.D. Salinger", "Virginia Woolf",
  "Oscar Wilde", "Emily Brontë", "Herman Melville", "Mary Shelley",
  "John Steinbeck", "Aldous Huxley", "Lewis Carroll", "George R.R. Martin",
  "Rick Riordan", "Jeff Kinney", "Khaled Hosseini", "Margaret Atwood",
  "E.L. James", "Nicholas Sparks", "Neil Gaiman", "Jodi Picoult",
  "R.K. Narayan", "Ruskin Bond", "Chetan Bhagat", "Arundhati Roy"
]

const categories = [
  "Fiction", "Fantasy", "Dystopian", "Mystery", "Classic",
  "Adventure", "Romance", "Historical", "Thriller", "Horror",
  "Biography", "Drama", "Poetry", "Children", "Science Fiction"
]

const titles = [
  "Harry Potter and the Sorcerer's Stone", "The Hobbit", "To Kill a Mockingbird",
  "1984", "Pride and Prejudice", "The Great Gatsby", "Catching Fire",
  "The Alchemist", "The Shining", "The Da Vinci Code", "The Kite Runner",
  "Brave New World", "The Catcher in the Rye", "The Fault in Our Stars",
  "The Old Man and the Sea", "Animal Farm", "Gone Girl", "Life of Pi",
  "The Hunger Games", "Murder on the Orient Express", "Inferno", "It Ends with Us",
  "Norwegian Wood", "A Thousand Splendid Suns", "The White Tiger",
  "Half Girlfriend", "The Guide", "The God of Small Things",
  "Looking for Alaska", "The Book Thief", "A Tale of Two Cities",
  "Memoirs of a Geisha", "The Silent Patient", "The Time Traveler's Wife",
  "A Man Called Ove", "The Girl on the Train", "The Road", "The Night Circus",
  "The Bell Jar", "One Hundred Years of Solitude", "The Shadow of the Wind",
  "The Name of the Wind", "The Picture of Dorian Gray", "The Secret Garden",
  "Wuthering Heights", "Jane Eyre", "Little Women", "Rebecca",
  "Crime and Punishment", "War and Peace"
]

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function makeBooks(n = 500) {
  const books = []
  for (let i = 0; i < n; i++) {
    books.push({
      title: `${pick(titles)} (${i + 1})`,
      author: pick(authors),
      category: pick(categories),
      published_date: `${1950 + Math.floor(Math.random() * 74)}-${String(Math.ceil(Math.random() * 12)).padStart(2, "0")}-${String(Math.ceil(Math.random() * 28)).padStart(2, "0")}`
    })
  }
  return books
}

async function seedBooks() {
  const exists = await client.indices.exists({ index: "books" })
  if (!exists) {
    await client.indices.create({
      index: "books",
      body: {
        settings: {
          analysis: {
            analyzer: {
              phonetic_analyzer: {
                tokenizer: "standard",
                filter: ["lowercase", "my_phonetic"]
              }
            },
            filter: {
              my_phonetic: {
                type: "phonetic",
                encoder: "metaphone",
                replace: false
              }
            }
          }
        },
        mappings: {
          properties: {
            title: { type: "text", analyzer: "phonetic_analyzer" },
            author: { type: "text", analyzer: "phonetic_analyzer" },
            category: { type: "keyword" },
            published_date: { type: "date" }
          }
        }
      }
    })
    console.log("books index created")
  }

  const docs = makeBooks(500)
  const body = docs.flatMap(d => [{ index: { _index: "books" } }, d])
  await client.bulk({ refresh: true, body })
  console.log(`${docs.length} books added`)
}

seedBooks()
