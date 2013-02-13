require 'sinatra/base'

class App < Sinatra::Base
    configure do
        set :port, ENV['PORT']
    end

    get '/' do
        'Hello World!'
    end

end