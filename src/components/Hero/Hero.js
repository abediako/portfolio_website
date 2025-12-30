const Hero = () => {
    const handleClick = () => {
        alert("Button clicked!");
    }

    const experiment = (name) => {
        alert(`Experimenting with ${name}`);
    }

    let name = "audrey";

    return (
        <div className="hero">
            <h1>Hero Section</h1>
            <p>Welcome, {name.charAt(0).toUpperCase() + name.slice(1)}!</p>
            <button onClick={handleClick}>Learn More!</button>
            {/* Experimenting with passing arguments to event handlers with anonymous functions */}
            <button onClick={() => experiment('mary')}>Button Prop Experiment</button>
        </div>
    );
}

export default Hero;