class StoresController < ApplicationController

    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

    def index
        stores = Store.all
        render json: stores, status: :ok
    end

    def show
        store  = Store.find_by(id: params[:id])
        if store 
            render json: store 
        else
            render json: {error: "Store Not Found "}, status: :not_found 
        end 
    end


    private

    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end


end
