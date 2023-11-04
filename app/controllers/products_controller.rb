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


    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
      end




end
