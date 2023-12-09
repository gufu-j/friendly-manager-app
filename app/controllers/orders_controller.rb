class OrdersController < ApplicationController

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


    def index 
        orders  = Order.all.order(:created_at).reverse
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

    def adminDeleteOrder
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    def adminUpdateOrder 
        order = Order.find(params[:id])
        order.update!(order_params)
        render json: order
      end


    def update 
        order = @current_user.store.orders.find(params[:id])
        order.update!(order_params)
        render json: order
    end

    def delete_all
        orders = Order.all
        orders.destroy_all
        head :no_content
    end


   private 

   def order_params
    params.permit(:quantity, :note, :store_id, :product_id)
   end

   def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
   end

   def render_not_found_response
    render json: {error: "Order Not found"}, status: :not_found 
end



end
