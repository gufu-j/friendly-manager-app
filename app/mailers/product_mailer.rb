class ProductMailer < ApplicationMailer
  # default to -> {User.plunk(:email)},
  #     from: 'notification@example.com'


    def new_product_email
        @product = params[:product]
        # ADMIN_EMAIL:"guatemaladiegojose@gmail.com"
        user = params[:user]
        mail(to: user.email, subject: "You got a new product!")
      end




end
