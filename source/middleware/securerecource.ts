import { Next, Req, Res } from '../../types'

export default (req: Req, res: Res, next: Next) => (req.user ? next() : res.sendStatus(401))
