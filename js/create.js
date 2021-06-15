const create = {
    create: function(resource) {
        var message = '';
        for (var i = 0; i < recipes[resource].length; i += 2) {
            if (resources[recipes[resource][i + 1]] < recipes[resource][i]) { // If you have less than required of needed resources, no output for you...
                message += `Out of ${recipes[resource][i + 1]}`
            }
        }

        if (message.length == 0) { // No message means success!
            for (var i = 0; i < recipes[resource].length; i += 2) { // Remove resource cost
                resources[recipes[resource][i + 1]] -= recipes[resource][i]

                console.log(recipes[resource][i + 1], '-', recipes[resource][i], '=', resources[recipes[resource][i + 1]])
            }

            for (var i = 0; i < recipes[`${resource}_output`].length; i += 2) { // Add resource output
                resources[recipes[`${resource}_output`][i + 1]] += recipes[`${resource}_output`][i];

                console.log(recipes[`${resource}_output`][i + 1], '+', recipes[`${resource}_output`][i], '=', resources[recipes[`${resource}_output`][i + 1]])

                this.update_values();
            }
        } else {
            console.log(message);
        }
    },

    update_values: function() {
        for (var i = 0; i < resources.names.length; i++) {
            byId(`${resources.names[i].replace(/ /g, '_').toLowerCase()}-amount`).innerHTML = resources[resources.names[i].replace(/ /g, '_').toLowerCase()];
        }
    },
}