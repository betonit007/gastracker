const express = require('express')
const router = express.Router();
const { check, validationResult } = require('express-validator')
const vision = require('@google-cloud/vision');
const auth = require('../../middleware/auth')
const Reading = require('../../models/Readings')
const User = require('../../models/Users')


//Private POST route to record a reading
router.post('/', [
  auth,
  [
    check('text', 'A description is required').not().isEmpty(),
    //check('store', 'Store name is required').not().isEmpty(),
    check('amount', 'A total price must be included').not().isEmpty().isNumeric(),
    //check('perGallon', 'A total price must be included').not().isEmpty().isNumeric(),
    //check('numGallons', 'A numGallons price must be included').not().isEmpty().isNumeric(),
  ]
],
  async (req, res) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }
    try {

      const { store, street, city, state, amount, perGallon, numGallons, text } = req.body
      const user = await User.findById(req.user.id).select('-password')

      const newReading = new Reading({
        user: req.user.id,
        name: user.name,
        text,
        avatar: user.avatar,
        store,
        street,
        city,
        state,
        amount,
        perGallon,
        numGallons
      })

      const reading = await newReading.save()

      res.json(reading)

    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  })

//private route to get all readings
router.get('/:id/:millisecs', auth, async (req, res) => {
  try {
    const readings = await Reading.find(
      {
        date: {
          $lt: Date.now(),  //Start Date (will always be Date.now())
          $gt: Date.now() - req.params.millisecs //default one week in miliseconds
        },
        user: req.params.id
      }

    ).sort({ date: -1 })
    res.json(readings)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//public route to get all readings
router.get('/', async (req, res) => {
  try {

    const readings = await Reading.find({}).sort({ date: -1 })

    res.json(readings)

  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server Error')
  }
})

//delete reading by id
router.delete('/:id', auth, async (req, res) => {

  try {

    const reading = await Reading.findById(req.params.id)

    if (!reading) {
      return res.status(404).json({ msg: 'Post not found' })
    }

    if (reading.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
    }
    await reading.remove();

    res.json({ msg: 'Reading removed' })

  } catch (err) {
    console.error(err)
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Reading not found' })
    }
    res.status(500).send('Server Error')
  }
})

router.post('/upload', async (req, res) => {

  if (req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded' })
  }

  const file = req.files.file

  //TO MOVE PHOTO/FILE TO TO PUBLIC FOLDER
  file.mv(`${__dirname}/resources/${file.name}`, async err => {
    if (err) {
      console.error(err)
      return res.status(500).send(err)
    }
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
    const [result] = await client.textDetection(`./routes/api/resources/${file.name}`);

    res.json(result.fullTextAnnotation.text.split('\n'))
  })
})

//GOOGLE_APPLICATION_CREDENTIALS="C:\Users\timna\dev\googleCloud\vision\resources\fuel.json" node vision.js    

module.exports = router