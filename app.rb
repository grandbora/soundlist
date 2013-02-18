require 'sinatra/base'
require "sinatra/config_file"
require 'json'

class App < Sinatra::Base
    register Sinatra::ConfigFile

    configure do
        config_file 'config.yml'
        set :isDev, ENV['RACK_ENV'] === 'development'
    end

    get '/' do
        erb :index, :locals => {:isDev => settings.isDev, :soundcloud => settings.soundcloud.to_json}
    end

    get '/testrunner' do
        erb :testRunner
    end

    get '/bookmarklet/:id' do
        erb :bookmarklet
    end

end