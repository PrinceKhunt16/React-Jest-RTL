const Application = () => {
    return (
        <>
            <h1>Job Application form</h1>
            <h2>All information below is mandatory</h2>
            <p>Fill the form carefully</p>
            <div title="close">X</div>
            <img src="https://via.placeholder.com/150" alt="person" />
            <div data-testid="custom-element">Custom HTML element</div>
            <br />
            <form>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" placeholder="Name" value="john" onChange={() => {}} />
                </div>
                <br />
                <div>
                    <label htmlFor="bio">Bio</label>
                    <textarea id="bio" />
                </div>
                <br />
                <div>
                    <label htmlFor="job-location">Job location</label>
                    <select id="job-location">
                        <option value="">Select a country</option>
                        <option value="US">United States</option>
                        <option value="GB">United Kingdom</option>
                        <option value="CA">Canada</option>
                        <option value="IN">India</option>
                        <option value="AU">Australia</option>
                    </select>
                </div>
                <br />
                <div>
                    <label>
                        <input type="checkbox" id="terms" />
                        <span>I agree to the terms and conditions</span>
                    </label>
                </div>
                <br />
                <button disabled>Submit</button>
            </form>
        </>
    )
}

export default Application;