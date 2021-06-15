const side = {
    create_side: function(resource) {

        for (var i = 0; i < resources.names.length; i++) {

            byId('side-anchor').innerHTML += `
            <div class="side-card">
                <img src="images/placeholder.png" class="card-icon" />
                <div class="text-grid">
                    <div class="card-title">
                        ${resources.names[i].replace(/_/g, ' ')}
                    </div>
                    <div id="${resources.names[i].replace(/ /g, '_').toLowerCase()}-amount" class="card-amount">
                        ${resources[resources.names[i].replace(/ /g, '_').toLowerCase()]}
                    </div>
                </div>
            </div>
            `
        }


    }
}

side.create_side();