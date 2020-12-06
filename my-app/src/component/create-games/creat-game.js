import React,{Component} from 'react'

class CreateGame extends Component{
    render(){
        return(
            <div>
                <form action="http://localhost:5000/games/create-game" method="POST"><label>Name:</label><br/><input type="text" name="name" placeholder="Name" /><br/><label>Name Page:</label><br/><input type="text" name="namePage" placeholder="Name Page" /><br/><label>Image BackGournd:</label><br/><input type="text" name="imageBackGournd"
                placeholder="Image BackGournd" /><br/><label>Image Backgournd Games:</label><br/><input type="text" name="imageBackgourndGames" placeholder="Image Backgournd Games" /><br/><label>Image One:</label><br/><input type="text" name="imageOne" placeholder="Image One"
            /><br/><label>Image Two:</label><br/><input type="text" name="imageTwo" placeholder="Image Two" /><br/><label>Image Three:</label><br/><input type="text" name="imageThree" placeholder="Image Three" /><br/><label>Date:</label><br/><input type="text"
                name="date" placeholder="Date Vd(01/01/0001)" /><br/><label>Update:</label><br/><input type="text" name="update" placeholder="Update" /><br/><label>Version:</label><br/><input type="text" name="version" placeholder="Version" /><br/><label>Developer:</label><br/><input
                type="text" name="developer" placeholder="Developer" /><br/><label>Publish:</label><br/><input type="text" name="publish" placeholder="Publish" /><br/><label>Update Up:</label><br/><input type="text" name="updateUp" placeholder="Update Up" /><br/><label>Number One:</label><br/><input
                type="text" name="numberOne" placeholder="Number One" /><br/><label>Number Two:</label><br/><input type="text" name="numberTwo" placeholder="Number Two" /><br/><label>Number Three:</label><br/><input type="text" name="numberThree" placeholder="Number Three"
            /><br/><label>Number Four:</label><br/><input type="text" name="numberFour" placeholder="Number Four" /><br/><label>Number Five:</label><br/><input type="text" name="numberFive" placeholder="Number Five" /><br/><label>Minimum Os:</label><br/><input
                type="text" name="os" placeholder="Minimum Os" /><br/><label>Minimum Processor:</label><br/><input type="text" name="processor" placeholder="Minimum Processor" /><br/><label>Minimum Memory:</label><br/><input type="text" name="memory" placeholder="Minimum Memory"
            /><br/><label>Minimum Graphics:</label><br/><input type="text" name="graphics" placeholder="Minimum Graphics" /><br/><label>Minimum DirectX:</label><br/><input type="text" name="directX" placeholder="Minimum DirectX" /><br/><label>Minimum Storage:</label><br/><input
                type="text" name="storage" placeholder="Minimum Storage" /><br/><label>Recommended Os:</label><br/><input type="text" name="os1" placeholder="Minimum Os" /><br/><label>Recommended Processor:</label><br/><input type="text" name="processor1" placeholder="Minimum Processor"
            /><br/><label>Recommended Memory:</label><br/><input type="text" name="memory1" placeholder="Minimum Memory" /><br/><label>Recommended Graphics:</label><br/><input type="text" name="graphics1" placeholder="Minimum Graphics" /><br/><label>Recommended DirectX:</label><br/><input
                type="text" name="directX1" placeholder="Minimum DirectX" /><br/><label>Recommended Storage:</label><br/><input type="text" name="storage1" placeholder="Minimum Storage" /><br/><label>Category1:</label><br/><input type="text" name="category1" placeholder="Category1"
            /><br/><label>Category2:</label><br/><input type="text" name="category2" placeholder="Category2" /><br/><label>Category3:</label><br/><input type="text" name="category3" placeholder="Category3" /><br/><label>View:</label><br/><input type="text" name="view"
                value="0" /><br/><label>LinkGGD:</label><br/><input type="text" name="googleDrive" placeholder="Google Drive" /><br/><button>Add</button></form>
            </div>
        )
    }
}

export default CreateGame;