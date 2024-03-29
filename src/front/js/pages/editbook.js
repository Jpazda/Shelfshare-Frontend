import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

export const Editbook = () => {

    const { book_id } = useParams();
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {
        // Fetch the book details when the component mounts
        actions.geteditbooks(book_id, setname, setauthor, setYear, setcategory, setquantity, setImage, setDonate, setExchange, setDescription)

    }, [book_id]);


    const [name, setname] = useState("");
    const [author, setauthor] = useState("");
    const [year, setYear] = useState("");
    const [category, setcategory] = useState("");
    const [quantity, setquantity] = useState("");
    const [image, setImage] = useState("");
    const [donate, setDonate] = useState("");
    const [exchange, setExchange] = useState("");
    const [description, setDescription] = useState("")



    const backgroundStyle = {
        backgroundImage: `url(https://images.ra
    wpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjE4MDgtcmVtaXgtMDRhLWMuanBn.jpg)`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        minHeight: "100vh", // Set the minimum height to cover the entire viewport
    };

    return (
        <div className="background container mt-4 rounded" style={{ ...backgroundStyle }}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <form className="form mt-4">
                        <div className="mb-3">
                            <label htmlFor="nameset" className="form-label">
                                Book Name: </label>
                            <input className="form-control"
                                type="text"
                                id="setname"
                                name="name"
                                value={name}
                                onChange={(e) => setname(e.target.value)}
                                required
                            ></input>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="authorset" className="form-label">
                                Author Name:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="author"
                                name="author"
                                value={author}
                                onChange={(e) => setauthor(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Yearset" className="form-label">
                                Year:
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="year"
                                name="year"
                                value={year}
                                onChange={(e) => setYear(e.target.value)}
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="categoryset" className="form-label">
                                Category:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="category"
                                name="category"
                                value={category}
                                onChange={(e) => setcategory(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="quantityset" className="form-label">
                                Quantity:
                            </label>
                            <input
                                className="form-control"
                                type="number"
                                id="quantity"
                                name="quantity"
                                value={quantity}
                                onChange={(e) => setquantity(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="Image" className="form-label">
                                Image:
                            </label>
                            <input
                                className="form-control"
                                type="text"
                                id="image"
                                name="image"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}

                            />
                        </div>

                        <label>Donate:</label>
                        <input
                            type="checkbox"
                            name="donate"
                            checked={donate === "Yes"}
                            onChange={(e) => setDonate(e.target.checked ? "Yes" : "No")}
                        />
                        <br />
                        <br />

                        <label>Exchange:</label>
                        <input
                            type="checkbox"
                            name="exchange"
                            checked={exchange === "Yes"}
                            onChange={(e) => setExchange(e.target.checked ? "Yes" : "No")}
                        />
                        <br />
                        <br />

                        <label>Description</label>
                        <p />
                        <textarea
                            id="Description"
                            name="Description"
                            rows={4}
                            cols={60}
                            placeholder="Type here about book.............."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <br />
                        <br />


                        <br />
                        <br />

                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={(e) => {
                                e.preventDefault();
                                actions.editbooks(
                                    book_id,
                                    name,
                                    author,
                                    category,
                                    quantity,
                                    image,
                                    year,
                                    donate,
                                    exchange,
                                    description
                                )
                                    .then(() => {
                                        navigate(`/profile/${store.activeuser}`);
                                    });
                            }}
                        >
                            Submit
                        </button>
                    </form>
                </div></div>
        </div>);
};
