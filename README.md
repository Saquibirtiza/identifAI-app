## identifAI

### Description:

identifAI is an application made with the intention of introducing people to the practical application of AI in computer vision. Users can provide url of any image of their choice and the app will detect faces in that image if there are any. In case of multiple faces, it will detect all the faces with individual bounding boxes around each of them. The app is resposive for both desktop and mobile devices. To try the demo go to this link:<br />
https://saquibirtiza.github.io/identifAI-app/

### Frameworks and API:

ReactJs is used to build the frontend of the aplication whereas for the backend, NodeJs is the medium of choice. The backend is hosted in Heroku where Prostgres is used to manintain the database. [CLarifai](https://www.clarifai.com/models/face-detection-image-recognition-model-a403429f2ddf4b49b307e318f00e528b-detection) Face Detection API is used for the detection of the faces in the site.

### Progam Demo:

The key features of this program:

- Individual bounding boxes for each face in case there are multiple faces
- Separate user profiles keeping track of the number of images detected
- Real time detection <br/>

![Progam demo](demo/demo.gif)
