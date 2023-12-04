class ProductMailer < ApplicationMailer
  # default to -> {User.plunk(:email)},
  #     from: 'notification@example.com'


    def new_product_email
        @product = params[:product]
        # ADMIN_EMAIL:"guatemaladiegojose@gmail.com"
    
        mail(to: "djosegfunes1998@gmail.com", subject: "You got a new product!")
      end




end
