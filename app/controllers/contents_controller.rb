class ContentsController < ApplicationController
    before_action :set_content, only: [:show, :update, :destroy]

    def index
        render json: Content.all, status: :ok
    end
    
    def show
        render json: @content, status: :ok
    end

    def create
        @content = Content.create!(content_params)
        render json: @content, status: :created
    end

    def update
        @content.update!(content_params)
        render json: @content, status: :accepted
    end

    def destroy
        @content.destroy
        render json: {}
    end

    private

    def content_params
        params.permit(:user_id, :place_id, :comment, :rating)
    end

    def set_content
        @content = Content.find(params[:id])
    end
end
