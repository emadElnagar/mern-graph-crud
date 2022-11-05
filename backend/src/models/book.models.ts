import { Schema, model } from 'mongoose';

interface Book {
  title: string,
  brief: string,
  author: string
}

const bookSchema = new Schema<Book>({
  title: { type: String, required: true, unique: true },
  brief: { type: String, required: true },
  author: { type: String, required: true }
}, {
  timestamps: true
});

const Book = model("Book", bookSchema);
export default Book;
