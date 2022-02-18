import AboutMe from './AboutMe/AboutMe'
import classes from './Main.module.css'
import MyPosts from './MyPosts/MyPosts'

function Main() {
    return (
        <main className={classes.main}>
            <AboutMe fuulName='Mike Knyazev' age='30' sity='Los Angeles'/>
            <MyPosts />
        </main>
    )
}

export default Main