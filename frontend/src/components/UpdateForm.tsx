const UpdateForm = () => {
  return (
    <form>
      <input type="text" id="title" placeholder="Book name" required />
      <input type="text" id="autor" placeholder="Book autor" required />
      <textarea id="brief" placeholder="Brief about the book"required ></textarea>
      <input type="submit" value="craate" />
    </form>
  )
}

export default UpdateForm;
