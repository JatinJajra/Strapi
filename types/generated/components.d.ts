import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ComponentsPartners extends Struct.ComponentSchema {
  collectionName: 'components_components_partners';
  info: {
    displayName: 'Partners';
    icon: 'emotionHappy';
  };
  attributes: {
    partner: Schema.Attribute.Media<'images', true>;
  };
}

export interface ComponentsBlog extends Struct.ComponentSchema {
  collectionName: 'components_components_blogs';
  info: {
    displayName: 'Blog';
    icon: 'chartCircle';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    date: Schema.Attribute.Date;
    image: Schema.Attribute.Media<'images'>;
  };
}

export interface ComponentsBanner extends Struct.ComponentSchema {
  collectionName: 'components_components_banners';
  info: {
    displayName: 'Banner';
    icon: 'crop';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    subtitle: Schema.Attribute.String;
    first_image: Schema.Attribute.Media<'images'>;
    second_image: Schema.Attribute.Media<'images'>;
    final_image: Schema.Attribute.Media<'images'>;
    light_text: Schema.Attribute.String;
    first_card_title: Schema.Attribute.String;
    second_card_title: Schema.Attribute.String;
    final_card_title: Schema.Attribute.String;
    first_card_subtitle: Schema.Attribute.String;
    second_card_subtitle: Schema.Attribute.String;
    final_card_subtitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'components.partners': ComponentsPartners;
      'components.blog': ComponentsBlog;
      'components.banner': ComponentsBanner;
    }
  }
}
