
eports.user_create = function (req, res) {
    var new_user = new User ({ name: 'Laurie'
                               role: 'Superhero',
                               pin: '1112',
                               phone: '617-922-1313'
                             })

    new_user.save(function (err) {
      if (err) {
        return next(err);
      }
      res.send('WootWoot!')
    })
};
