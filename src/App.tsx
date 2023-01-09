import "./App.css";
import { Editcom } from "./components/editor/Editcom";
import { NewEditor } from "./components/editor/NewEditor";

function App() {
    const data: any = `<h2>The Flavorful Tuscany Meetup</h2>
    <h3>Welcome letter</h3>
    <p>&nbsp;</p>
    <p><strong>Dear Guest,</strong></p>
    <p>We are delighted to welcome you to the annual <em>Flavorful Tuscany Meetup</em> and hope you will enjoy the programme as well as your stay at the <a href="https://ckeditor.com">Bilancino Hotel</a>.</p>
    <p>Please find attached the full schedule of the event.</p>
    <p>The annual Flavorful Tuscany meetups are always a culinary discovery. You get the best of Tuscan flavors during an intense one-day stay at one of the top hotels of the region. All the sessions are lead by top chefs passionate about their profession. I would certainly recommend to save the date in your calendar for this one!</p>
    <p>Angelina Calvino, food journalist</p>
    <p>Please arrive at the <a href="https://ckeditor.com">Bilancino Hotel</a> reception desk at least <strong>half an hour earlier</strong> to make sure that the registration process goes as smoothly as possible.</p>
    <p>We look forward to welcoming you to the event.</p>
    <p>&nbsp;</p>
    <p><strong>Victoria Valc</strong></p>
    <p>Event Manager<br />
    Bilancino Hotel</p>`;

    return (
        <div>
            <Editcom data={data} />
<NewEditor/>
        </div>
    );
}

export default App;