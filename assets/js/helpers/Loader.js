import circleImage from '../../images/Preloader-image-1.svg'
import circleImage2 from '../../images/Web-Preloader-1.svg'
import circleImage3 from '../../images/3-Leg-Preloader.svg'
function loader(options={
    'elementCible' : undefined,
    'className' : '',
    'directive' : 'ON',
    'relative' : 'OFF',
    'loaderWidth' : null,
    'loaderHeight' : null
})
{
    if(options.elementCible !== undefined )
    {
        if( options.directive === 'ON' && $(options.elementCible).find('.loader-container').length === 0) {
            const position = options.relative === 'OFF' ? 'position-absolute' : 'position-relative'
            const loaderContainer = $('<div />', {
                id: 'loader-container',
                class: 'loader-container '+position+' bottom-0 left-0 w-100 h-100 bg-white overflow-hidden'
            });
            const loaderPostContainer = $('<div />', {
                class:'loader-post-container w-100 h-100 d-flex'
            });
            const imageWidth = options.loaderWidth != null ? ';width:'+options.loaderWidth : '';
            const imageHeight = options.loaderHeight != null ? ';width:'+options.loaderHeight : '';
            const image = $('<img />', {
                src: circleImage3,
                class: 'm-auto',
                style: imageHeight+imageWidth
            });
            loaderPostContainer.append(image);
            loaderContainer.append(loaderPostContainer)
            $(options.elementCible).each(function() {
                $(this).addClass('position-relative')
                $(this).append(loaderContainer);
            })
        } else if(options.directive === 'OFF') {
            $(options.elementCible).each(function() {
                $(this).find(".loader-container").remove();
            })
        }

    }


}

export function loaderOn($element, $relative=false, $stylesOptions = {
    'loaderWidth' : null,
    'loaderHeight' : null
})
{
  loader({
      'elementCible' : $element,
      'directive' : 'ON',
      'relative': $relative ? 'ON' : 'OFF',
      'loaderWidth' : $stylesOptions.loaderWidth,
      'loaderHeight' : $stylesOptions.loaderHeight
  })
}

export function loaderOff($element)
{
    loader({
        'elementCible' : $element,
        'directive' : 'OFF'
    })
}
