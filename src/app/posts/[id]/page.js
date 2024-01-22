export default function SinglePostPage({ params }) {
  //here we might make an API call to get the post with the id that matches params.id

  return;
  <div>
    <h1>Post Page {params.id}</h1>;
    <p>
      Params is in this page - an opbject with a property called <b>id</b>
    </p>
    <p>this is because we called our folder [id]</p>
    <p>
      we can replace the second part of the url with ANYTHING and it will become
      params.id
    </p>
  </div>;
}
