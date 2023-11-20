class ProductsController < ApplicationController


  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index 
        products = Product.all
        render json: products, status: :ok
    end

    def show 
        product = Product.find_by(id: params[:id])
        if product
            render json:cake
        else
            render json: {error: "procut not found"}, status: :not_found
        end
    end

    def total_quantities
        products = Product.all

       product = products.find_by(id: params[:num].to_i).orders.map{|order| order.quantity}
        total_amount = product.reduce(0) { |total, num| total + num }
        #quantities = orders.map{|order| order.quantity}
        # total = orders.select{|order| order.quantity == 20}
       render json: product
    end


      def new
        @product = Product.new
      end
    
      def create
        @product = Product.new(product_params)
    
        respond_to do |format|
            
            if @product.save
                ProductMailer.with(product: @product).new_product_email.deliver_later
                format.html { redirect_to(@product, notice: 'Product was successfully created.') }
                format.json { render json: @product, status: :created, location: @product }
            else
                format.html { render action: 'new' }
                format.json { render json: @product.errors, status: :unprocessable_entity }
            end

        end


      end


        private
    
        def product_params
        params.require(:product).permit(:name)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

end
