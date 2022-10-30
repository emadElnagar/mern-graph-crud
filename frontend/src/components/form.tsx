function Form() {
  return (
    <div className="paper">
      <form>
        <input type="text" id="name" placeholder="Book name" />
        <input type="text" id="autor" placeholder="Book autor" />
        <textarea id="brief" placeholder="Brief about the book"></textarea>
        <input type="submit" value="craate" />
      </form>
    </div>
  );
}

export default Form;