class ProductMailerPreview < ActionMailer::Preview

    def new_product_email
        # Set up a temporary product for the preview
        product = Product.new(name: "mango")
    
        ProductMailer.with(product: product).new_product_email
      end

end