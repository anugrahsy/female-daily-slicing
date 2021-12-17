import { AiFillStar } from 'react-icons/ai';
import product1 from '../assets/img/editor-product1.png';
import product2 from '../assets/img/editor-product2.png';
import product3 from '../assets/img/editor-product3.png';
import product4 from '../assets/img/editor-product4.png';
import product5 from '../assets/img/editor-product5.png';
import userImg1 from '../assets/img/editor-user-1.png';
import userImg2 from '../assets/img/editor-user-2.png';
import userImg3 from '../assets/img/editor-user-3.png';

const EditorsChoice = (props) => {
    const newEditorChoice = props.editorsChoiceData;
    return (
        <div className="editors-choice-container">
            <div className="container">
                <div className="section-paddings">
                    <div className="row">
                        <div className="adds-banner">
                            <div className="col-md-12 mt-3 mb-4">
                                <div className="adds-banner-970x50 mx-auto d-flex align-items-center justify-content-center">
                                    <h3>Top Frame 970x50</h3>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3 mb-5">
                                <div className="adds-banner-970x250 mx-auto d-flex align-items-center justify-content-center">
                                    <h3>Billboard 970x250</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="editors-choice-content section-paddings">
                            <p className="section-title">Editor's Choice</p>
                            <p className="section-description">Curated with love</p>
                        </div>
                    </div>
                    <div className="row mt-5">
                        {newEditorChoice.map((data, i) => (
                            <div className="col-md-2 card-col" key={data.id} style={{ marginRight: data.product.margin_right }}>
                                <div className="card product-card">
                                <div className="card-editor d-flex justify-content-center flex-row">
                                    <div className="card-editor-image  me-3">
                                        <img src={0 === data.id ? userImg1 : (1 === data.id ? userImg2 : (2 === data.id ? userImg3 : (3 === data.id ? userImg2 : (4 === data.id ? userImg1 : ""))))} className="editor-image rounded-circle" alt="" width={60} height={60}></img>
                                    </div>
                                    <div className="editor-name d-flex flex-column">
                                        <p className="editor-title montserrat">{data.editor}</p>
                                        <p className="editor-jobs montserrat">{data.jobs}</p>
                                    </div>
                                </div>
                                    <img src={0 === data.product.image_code ? product1 : (1 === data.product.image_code ? product2 : (2 === data.product.image_code ? product3 : (3 === data.product.image_code ? product4 : (4 === data.product.image_code ? product5 : ""))))} width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." />
                                    {/* <img src={data.id === data[data.id].product.image_code ? product1 : (data.product.image_code === data[data.id.product.image_code] ? product2 : '') } width={'50px !important'} height={'50px !important'} className="card-img-top card-img-product m-auto p-3" alt="..." /> */}
                                    <div className="card-body card-body-product mt-0">
                                        <div className="rating mt-2 d-flex align-items-center">
                                            <span className="rating-value montserrat me-2">4.9</span>
                                            <div className="product-rating d-flex align-items-center me-2">
                                                <AiFillStar size={16} color={"#DA254E"} />
                                                <AiFillStar size={16} color={"#DA254E"} />
                                                <AiFillStar size={16} color={"#DA254E"} />
                                                <AiFillStar size={16} color={"#DA254E"} />
                                                <AiFillStar size={16} color={"#D0D0D0"} />
                                            </div>
                                            <span className="rating-value montserrat">(7)</span>
                                        </div>
                                        <p className="product-title montserrat mt-2">{data.product.product_title}</p>
                                        <p className="product-text montserrat mt-1">{data.product.type_product}</p>
                                        <p className="product-text-desc montserrat mt-0">{data.product.color}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                        }
                    </div>
                </div>



            </div>
        </div>
    );
}

export default EditorsChoice;
