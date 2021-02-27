let phoneMask = IMask(
    document.getElementById('phone-form'), {
      mask: '+0000000000000',
      min: 0,
      max: 15
    });

    let phoneMaskFooter = IMask(
      document.getElementById('phone-footer'), {
        mask: '+0000000000000',
        min: 0,
        max: 15
      });
    
  