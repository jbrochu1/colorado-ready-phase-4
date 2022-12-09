class PlacesController < ApplicationController

    skip_before_action :authorized_user, only: [:index, :show, :create]

    before_action :set_place, only: [:show, :update, :destroy]

    def index
        render json: Place.all, status: :ok
    end
    
    def show
        render json: @place, status: :ok
    end

    def create
        @place = Place.create!(place_params)
        render json: @place, status: :created
    end

    def update
        @place.update!(place_params)
        render json: @place, status: :accepted
    end

    def destroy
        @place.destroy
        render json: {}
    end

    private

    def place_params
        params.permit(:name, :address, :category, :image, :hours, :elevation, :kid_friendly, :user_id)
    end

    def set_place
        @place = Place.find(params[:id])
    end
end
