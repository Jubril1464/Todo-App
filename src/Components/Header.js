import Button from "./Button";
import '../index.css'


const Header = ({showForm, changeTextAndColor}) => {
    return (
        <header className="header">
            <h1 className="app-header">Todo Manager</h1>
            <Button onClick={showForm}
            color={changeTextAndColor? 'red': 'aqua'}
            text={changeTextAndColor? 'Close': 'Add'} />
        </header>
    )
}
export default Header