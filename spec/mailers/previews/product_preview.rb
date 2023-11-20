# Preview all emails at http://localhost:3000/rails/mailers/product
class ProductPreview < ActionMailer::Preview

    def new_product_email
        # Set up a temporary product for the preview
        product = Product.new(name: "Joe Smith")
    
        ProductMailer.with(product: product).new_product_email
      end



end
