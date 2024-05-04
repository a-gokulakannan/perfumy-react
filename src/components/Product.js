import one from "../asserts/images/one.jpeg";
import two from "../asserts/images/two.jpeg";
import three from "../asserts/images/three.jpeg";


function Product(){
    return(
      <div className='product'>
        <div className='box'>
          <img src={one} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus accusamus quisquam ratione aliquam ipsam, eveniet fuga asperiores sit veritatis.</p>
        </div>
  
        <div className='box'>
          <img src={two} alt=""></img>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus accusamus quisquam ratione aliquam ipsam, eveniet fuga asperiores sit veritatis.</p>
        </div>
  
        <div className='box'>
          <img src={three} alt="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ducimus accusamus quisquam ratione aliquam ipsam, eveniet fuga asperiores sit veritatis.</p>
        </div>
        
      </div>
    )
  }

  export default Product