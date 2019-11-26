/*
var products = ['banana', 'apple', 'orange'];
const newArr = products.map(function (item) {

    return <li>{item}</li>

})

const Fruit = function (props) {
    return newArr

}


const App = function (props) {
    return (
        <div>
            <h1>Bla bla</h1>  {props.name}
            <Fruit />
        </div>
    )
}

ReactDOM.render(<App name="Pera" />, document.getElementById('root'))
*/


<App>
    <header>
        <NavigationList>
            <div>
                <input type='button' value='' />
                <input type='text' placeholder="Search" />
                <input type='button' value='' />
            </div>
        </NavigationList>

    </header>

    <MainSection>
        <OptionList>
            <li></li>
            <li></li>
            <li></li>
        </OptionList>

        <OptionList>
            <li></li>
            <li></li>

        </OptionList>
        <OptionList>
            <li></li>
            <li></li>
            <li></li>

        </OptionList>
    </MainSection>


    <Videos>
        <VideoCard>
            <img />
            <h3></h3>
        </VideoCard>
    </Videos>

</App>



