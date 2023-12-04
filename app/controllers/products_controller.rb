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
            render json: product
        else
            render json: {error: "product not found"}, status: :not_found
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


      # def new
      #   @product = Product.new
      # end
    
      def create
        @product = Product.create!(product_params)

         respond_to do |format|
            
            if @product
                ProductMailer.with(product: @product).new_product_email.deliver_now
                format.html { redirect_to(@product, notice: 'Product was successfully created.') }
                format.json { render json: @product, status: :created, location: @product }
            else
                format.html { render action: 'new' }
                format.json { render json: @product.errors, status: :unprocessable_entity }
    
            end

          end
      end

      # def destroy
      #   product = @current_user.store.products.find(params[:id])
      #   product.destroy
      #   head :no_content
      # end

      def update 
        product = Product.find(params[:id])
        product.update!(product_params)
        render json: product
      end


        private

        
    
        def product_params
        params.require(:product).permit(:name)
        end

        def render_unprocessable_entity_response(invalid)
            render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
        end

        def render_not_found_response
          render json: {error: "Product Not found"}, status: :not_found 
      end

end
