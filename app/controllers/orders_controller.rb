class OrdersController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index 
        orders  = Order.all
        render json: orders, status: :ok
    end

    def show
        order = Order.find_by(id: params[:id])
        if order
            render json:order
        else
            render json: {error: "Order not found "}, status: :not_found 
        end
    end

   def create
    order = Order.create!(order_params)
    render json: order, status: :created
   end

   def destroy
    order = @current_user.store.orders.find(params[:id])
    order.destroy
    head :no_content
    end

    def update 
        order = @current_user.store.orders.find(params[:id])
        order.update!(order_params)
        render json: order
    end


   private 

   def order_params
    params.permit(:quantity, :note, :store_id, :product_id)
   end

   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
   end



end
