import  express  from "express";
import * as diaryServices from '../services/DiarySerivces'
import toNewDiaryEntry from "../utils";

const router = express.Router()

router.get('/', (_req, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res, err) => {
    const diary = diaryServices.findByid(+req.params.id)
    return (diary != null)? res.send(diary) : res.send(err)
})

router.post('/', (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)
        res.json(addedDiaryEntry)
    } catch (e) {
        res.send(400).send(e)
    }
})
export default router