import nc from 'next-connect';
import cors from 'cors';
import cfg from './config'

const handler = nc()
    .use(cors())
    .get(async (req, res) => {
        const response = await fetch(cfg.apiUrl, config);
        res.json(response);
    });

export default handler;