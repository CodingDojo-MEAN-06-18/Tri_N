

exports.index = ( req, res, next ) => {
    animal.find()
        .exec((err, animal) => {
            if( err ) return next( err );
            res.render( 'index', { title: "animal", animal : animal });
            });
    };

exports.new = ( req, res, next ) => {
    res.render( 'new', { title: "Add animal" });
    };

exports.create = ( req, res, next ) => {
    new animal(req.body)
        .save(err => {
            if(err){
                setErrors(req, err.errors);
                res.redirect(req.url);
            } else {
                res.redirect('/');
            }
            });    
    };    

exports.show = ( req, res, next ) => {
 animal.find({ _id: req.params.id }, (err, animal) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect('/');
        } else {
            res.render('show', { title : `View animal ${animal[0].name}`, animal : animal[0] });            
        }
        });
    };

exports.edit = ( req, res, next) => {
 animal.find({ _id: req.params.id }, (err, animal) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect('/');
        } else {
            res.render('edit', { title : `Edit animal ${animal[0].name}`, animal : animal[0] });            
        }
        });
    };    

exports.save = ( req, res, next ) => {
 animal.update({ _id : req.params.id}, req.body, (err, result) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect(req.url); 
        } else {
            res.redirect('/');
        }
        });
    };

exports.remove = ( req, res, next ) => {
 animal.remove({ _id : req.params.id}, (err, result) => {
        if (err){
            setErrors(req, err.errors);
            res.redirect(req.url); 
        } else {
            res.redirect('/');
        }
        });
    };

