require "latex_to_svg/version"
require 'json'

module LatexToSvg
  class << self
    def convert_to_svg(latex, source=nil)
      begin
        json_response = %x(node ./lib/latex_to_svg.js '#{latex}')
        response = JSON.parse(json_response);

        raise response['errors'].join( ) if response['errors']

        response['svg'].gsub(/\n/im, '')
                       .gsub(/<svg(\b[^>]*)>/, '<svg\1 class="svg_mathjax">')
      rescue => error
        raise error
      end
    end

    def convert_content(content, source=nil)
      content.split('&&').each_with_index.map do |chunk, index|
        index%2 == 1 ? convert_to_svg(chunk, source) : chunk
      end.join
    end
  end
end
