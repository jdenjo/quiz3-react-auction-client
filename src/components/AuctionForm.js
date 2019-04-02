import React from "react";
import FormErrors from "./FormErrors";

function AuctionForm(props) {
    const { errors = [], data = {}, onSubmit } = props;

    function handleSubmit(event) {
        event.preventDefault();
        const { currentTarget } = event;
        const fD = new FormData(currentTarget);

        if (typeof onSubmit === "function") {
            onSubmit({
                title: fD.get("title"),
                description: fD.get("description"),
                end : fD.get("end"),
                reserve: fD.get("reserve")
            });
        }
    }

    return (
        <form className="AuctionForm" onSubmit={handleSubmit} >
            <div>
                <label htmlFor="title">Item</label> <br />
                <FormErrors forField="title" errors={errors} />
                <input name="title" id="title" defaultValue={data.title} />
            </div>
            <br />

            <div>
                <label htmlFor="description">Item Desciption</label> <br />
                <FormErrors forField="description" errors={errors} />
                <textarea
                    name="description"
                    id="description"
                    cols="50"
                    rows="5"
                    defaultValue={data.description}
                />
            </div>

            <div>
            <label htmlFor="end">Auction End</label> <br />
            <FormErrors forField="end" errors={errors} />
            <input type="datetime-local" name="end" id="end" defaultValue={data.end_date} />
            </div>
<br />
            <div>
                <label htmlFor="reserve">Reserve Price</label> <br />
                <FormErrors forField="reserve" errors={errors} />
                <input name="reserve" id="reserve" defaultValue={data.reserve} />
            </div>

<br />
            <div>
                <input type="submit" value="Submit" />
            </div>
        </form>
    );
}

export default AuctionForm;

