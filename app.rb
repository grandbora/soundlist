require 'sinatra/base'

class App < Sinatra::Base

    get '/' do
        erb :index
    end

    get '/testrunner' do
        erb :testRunner
    end

end