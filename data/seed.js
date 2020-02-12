const kangorooQuestions = [
  {
      content: 'Un perro, un gato y tres gallinas ¿Cuántas patas tienen en total?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581290155/zombiCody/images/00001_dtge5v.png',
      option1: '5',
      option2: '10',
      option3: '12',
      option4: '14',
      option5: '20',
      solution: 'option4',
      feedback: 'Entre el gato y el perro tienen 2 x 4 = 8 patas. Las gallinas tienen 3 x 2 = 6 patas. El total es 8 + 6 = 14.'
  },
  {
      content: 'Se construyó un piso intercalando dos clases de mosaicos: unos grises y otros rayados, pero se desprendieron algunos mosaicos como se muestra la figura. ¿Cuántos mosaicos grises se desprendieron?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581290666/zombiCody/images/00002_p4fh7j.png',
      option1: '12',
      option2: '9',
      option3: '8',
      option4: '6',
      option5: '5',
      solution: 'option3',
      feedback: 'Debería haber 4 grises en cada renglón y, como son 5 renglones, en total debería haber 20 grises. Como hay 12, faltan 8.'
  },
  {
      content: '¿Cuál de las líneas gruesas indicadas es la más larga?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581291410/zombiCody/images/00003_rqf3xw.png',
      option1: 'A',
      option2: 'B',
      option3: 'C',
      option4: 'D',
      option5: 'E',
      solution: 'option5',
      feedback: 'La línea E mide 15 cuadros y es la más larga.'
  },
  {
      content: 'El Sr. Rodríguez quiere tender las toallas que lavó usando la menor cantidad posible de pinzas. Para 3 toallas necesita 4 pinzas, como se muestra en la figura. ¿Cuántas pinzas necesita para 9 toallas?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581291820/zombiCody/images/00004_zcik5l.png',
      option1: '9',
      option2: '10',
      option3: '12',
      option4: '16',
      option5: '18',
      solution: 'option2',
      feedback: 'Se necesita una pinza más que la cantidad de toallas a tender.'
  },
  {
      content: 'Eva tenía 12 dulces, Rosa tenía 9 dulces y Carlota no tenía ninguno. Juntaron todos los dulces y los repartieron de manera que a cada una le tocara la misma cantidad. ¿Cuántos dulces le tocaron a cada una?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581292168/zombiCody/images/00000_vldfrr.png',
      option1: '5',
      option2: '6',
      option3: '7',
      option4: '8',
      option5: '9',
      solution: 'option3',
      feedback: 'Juntaron 12 + 9 = 21 dulces. Entonces cada una recibió 7 dulces.'
  },
  {
      content: '¿Cuál es la pieza que completa el cuadrado?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581292954/zombiCody/images/00005_hcvvng.png',
      option1: 'a',
      option2: 'b',
      option3: 'c',
      option4: 'd',
      option5: 'e',
      solution: 'option2',
      feedback: ''
  },
  {
      content: 'Un bloque de 16 cubos está formado por 4 piezas de 4 cubos cada una: una negra, una gris oscuro, una gris claro y una blanca, como se ve en la figura. ¿Qué forma tiene la blanca?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581293330/zombiCody/images/00006_i1i0ou.png',
      option1: 'a',
      option2: 'b',
      option3: 'c',
      option4: 'd',
      option5: 'e',
      solution: 'option4',
      feedback: ''
  },
  {
      content: 'Lourdes pagó $1.50 por 3 paletas. Matías pagó $2.40 por dos galletas. ¿Cuánto pagó Inés por una paleta y una galleta.',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581292168/zombiCody/images/00000_vldfrr.png',
      option1: '$1.70',
      option2: '$1.90',
      option3: '$2.20',
      option4: '$2.70',
      option5: '$3.90',
      solution: 'option1',
      feedback: 'Cada paleta costó 50 centavos y cada galleta costó $1.20, así que Inés pagó 0.50 + 1.20 = 1.70 pesos.'
  },
  {
      content: 'Cuando Pablo une los vértices de un pentágono regular en forma salteada empezando en un vértice y deteniéndose cuando regresa a ese vértice, obtiene una estrella de 5 picos. Si hace lo mismo con un hexágono, obtiene un triángulo. ¿Qué obtiene si hace lo mismo con un polígono regular de 12 lados?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581293910/zombiCody/images/00007_ym4kqt.png',
      option1: 'un hexágono',
      option2: 'un cuadrado',
      option3: 'una estrella de 12 picos',
      option4: 'un triángulo',
      option5: 'ninguno de los anteriores',
      solution: 'option1',
      feedback: ''
  },
  {
      content: 'La figura que se muestra está formada por cuadros iguales. Su perímetro es de 42 cm. ¿Cuál es su área?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581294402/zombiCody/images/00008_umczvn.png',
      option1: '72 cm²',
      option2: '36 cm²',
      option3: '28 cm²',
      option4: '12 cm²',
      option5: '8 cm²',
      solution: 'option1',
      feedback: 'Verticalmente tenemos 6 segmentos; horizontalmente tenemos 8. Entones el perímetro está formado por 14 segmentos, lo cual nos dice que cada segmento mide 42 / 14 = 3 cm. Esto nos dice que cada cuadrito tiene área 9 cm² y, como son 8 cuadritos, el área total es 72 cm².'
  },
  {
      content: '¿Cuál es el número cubierto por la flor?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581295069/zombiCody/images/00009_zrgb4y.png',
      option1: '1',
      option2: '2',
      option3: '3',
      option4: '4',
      option5: '5',
      solution: 'option4',
      feedback: 'Como la suma de dos triángulos es 4, cada triángulo debe valer 2; pero un triángulo más un círculo da 3, así que el círculo vale 1; también un triángulo más un cuadrado es 5, así que el cuadrado vale 3. La flor vale 1 + 3 = 4.'
  },
  {
      content: '¿Cuál es el área de la región sombreada formada por los cuatro triángulos rectángulos iguales que se muestran en la figura?',
      image_URL: 'https://res.cloudinary.com/evilvic/image/upload/v1581295368/zombiCody/images/00010_jddm76.png',
      option1: '28 cm²',
      option2: '29 cm²',
      option3: '56 cm²',
      option4: '58 cm²',
      option5: '60 cm²',
      solution: 'option3',
      feedback: 'Como la altura del rectángulo es de 28 cm, la altura de los triángulos es de 14 cm. Horizontalmente los triángulos también abarcan 28 cm del total de 30 cm que tiene de base el rectángulo, así que la base de los triángulos mide 2 cm. Entones cada dos triángulos forman un rectángulo de 2 x 14. El área es 2 x 2 x 14 = 56.'
  }
]

const mongoose = require('mongoose')
const Course = require('../models/Course')
const Question = require('../models/Question')


const kangoroo = {
    title: 'Kangoroo',
    image_URL: '',
    description: 'Math for fun and glory'
}

mongoose
  .connect('mongodb://localhost/zombicody', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  })
  .then(async x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    //await Course.create(kangoroo).then(res => console.log('DB Ready...'))
    //await Question.create(kangorooQuestions).then(res => console.log('DB Ready...'))
    const course = await Course.findById('5e41c741a6381e73a4aae92e')
    const questions = await Question.find()
    
    let questionsIdArr = []
    questions.forEach(question => {
        questionsIdArr.push(question._id)
    })

    console.log(questionsIdArr)

    course.questions = questionsIdArr

    course.save()


  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });