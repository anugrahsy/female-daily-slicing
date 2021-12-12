import  productImage from '../assets/img/background-slice.png';

const ProductRecomendation = () => {
    return (
        <div className="product-recomendation">
            <div className="row poduct-wrapper" style={{backgroundImage: `url(${productImage})` }}>
                <div className="col-md-6">hueue</div>
                <div className="col-md-6">huehue</div>
            </div>
        </div>
    );
}

export default ProductRecomendation;
