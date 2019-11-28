import React from 'react';
//import postsData from './Posts'



class Main extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            img: ''
        };
    }

    componentDidMount() {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(data => this.setState({ img: data.message }));

    }


    render() {
        if (this.state.img === '') {
            return null;
        }

        return (
            <main>
                <div>
                    <img src={this.state.img} alt={'img'} />
                </div>
            </main>
        )
    }
}


/* render() {
     return (
         <main className='main-style'>
             <div>
                 {
                     this.state.posts.map(function (post) {
 
                         return (<div key={post.id} className='div-style'>
                             <h1>{post.title} </h1>
                             <p>{post.body}</p>
                         </div>)
 
 
                     })
                 }
             </div>
         </main>
     )
 
 }
 */





export default Main;