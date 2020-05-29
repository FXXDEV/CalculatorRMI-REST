module.exports = {
    async add(request, response){
        const { val1, val2 } = request.body;
        let result = parseInt(val1) + parseInt(val2);
        return response.json({ result });
    },

    async sub(request, response) {
        const { val1, val2 } = request.body;
        let result = val1 - val2;
        return response.json({ result });
    },

    async mult(request, response) {
        const { val1, val2 } = request.body;
        let result = val1 * val2;
        return response.json({ result });
    },

    async div(request, response) {
        const { val1, val2 } = request.body;
        let result = val1 / val2;
        return response.json({ result });
    },

    async pow(request, response) {
        const { val1, val2 } = request.body;
        let result = Math.pow(val1, val2);
        return response.json({ result });
    }
}