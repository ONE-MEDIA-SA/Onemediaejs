const home = async(req, res) => {
    res.render('pages/index')
}

const request = async(req, res) => {
    res.render('pages/request')
}

module.exports = {
    home, request
}