
const navbar = (
    <nav>
        <h1>The test site</h1>
        <ul>
        <li>about</li>
        <li>contact</li>
        <li>menu</li>
        </ul>
    </nav>
)
ReactDOM.render (navbar, document.getElementById("root"))

const page = (
<div>
    <h1>This is my test React webpage</h1>
    <h3>This is another H on this page</h3>
    <p>And this is P on this page</p>
    <ol>
        <li>hi</li>
        <li>there</li>
        <li>you</li>
    </ol>
</div>
)
ReactDOM.render(page,document.getElementById("root") )
//document.getElementById("root").append(JSON.stringify(page))

